import axios, { AxiosRequestConfig } from "axios";
import { store } from "redux/store";
import { authorize, logout } from "redux/slicer/user";

// Shared
import toast from "components/shared/Toast";

export function checkAuthentication(): boolean {
  function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  let authorized = false;
  async function authenticate(refreshToken: string) {
    const options = {
      url: `${process.env.api}/auth/refreshToken`,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        refreshToken
      }
    };

    let coords;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }

    await axios.request(options as AxiosRequestConfig).then(
      (response) => {
        authorized = true;
        store.dispatch(authorize({
          token: response.headers["authorization"],
          refreshToken: response.headers["refresh_token"],
          location: coords
        }));
      }).catch((error) => {
        authorized = false;
        toast("Erro", "Houve um erro ao renovar sua sessão.", "danger");
      });
  }

  function kick() {
    authorized = false;
    store.dispatch(logout());
  }

  const { user } = store.getState();
  if (user.token && user.refreshToken) {
    const currentTime = new Date();

    const token = new Date(parseJwt(user.token).exp * 1000);
    const tokenExpired = currentTime >= token;

    const refreshToken = new Date(parseJwt(user.refreshToken).exp * 1000);
    const refreshTokenExpired = currentTime >= refreshToken;

    if (refreshTokenExpired) {
      kick();
    } else if (tokenExpired) {
      authenticate(user.refreshToken);
    } else {
      authorized = true;
    }
  }

  return authorized;
}

export function getFirstName(name: string) {
  return name.split(" ")[0];
}

export function getLocation() {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, () => {
        resolve(undefined);
      }, { timeout: 3000 });
    }

    return undefined;
  });
}

export function getImage(file) {
  return file ? file : "https://riverlegacy.org/wp-content/uploads/2021/07/blank-profile-photo.jpeg";
}

export function parseDate(date: string) {
  const dateArr = date.split("T")[0].split("-");
  return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
}