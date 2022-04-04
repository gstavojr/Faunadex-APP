import axios from 'axios';

import { PhotoUpload, UserProfile, UserRegister } from '../interfaces/interfaces';
import { getToBase64 } from './user';

// const API_SERVER = `http://${process.env.REACT_APP_SERVER}/api`;
const API_SERVER = `http://18.216.16.37:4000/api`;
const options = {
  headers: { 'content-type': 'application/json' },
};

// =============================================================================
// AUTH
// =============================================================================
// Login
export const serverLogin = async (user: string, password: string) => {
  return await axios.post(
    `${API_SERVER}/signIn`,
    {
      usuario: user,
      contrasena: password,
    },
    options
  );
};

// Login FaceID
export const serverLoginFaceID = async (user: string, foto: string) => {
  return await axios.post(
    `${API_SERVER}/reko/compareFaces`,
    {
      usuario: user,
      image: foto,
    },
    options
  );
};
// Register
export const serverRegister = async (user: UserRegister) => {
  const image = user.photo ? await getToBase64(user.photo) : '';

  const newUser = {
    nombre: `${user.name} ${user.lastname}`,
    usuario: user.username,
    contrasena: user.password1,
    imagen: (image as string).toString(),
  };
  return await axios.post(`${API_SERVER}/signUp`, newUser, options);
};
// =============================================================================
// PROFILE
// =============================================================================
// GetProfile
export const serverProfile = async (id: number, token: string) => {
  return await axios.get(`${API_SERVER}/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// UPDATE Profile
export const serverUpdateProfile = async (
  id: number,
  token: string,
  user: UserProfile
) => {
  const image = user.photo ? await getToBase64(user.photo) : '';

  const userUpdated = {
    nombre: user.name,
    usuario: user.username,
    contrasena: user.password1,
    imagen: (image as string).toString(),
  };

  return await axios.put(`${API_SERVER}/profile/${id}`, userUpdated, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// =============================================================================
// ALBUM
// =============================================================================
// GetAlbums
export const serviceAlbums = async (uId: number, token: string) => {
  return await axios.get(`${API_SERVER}/album/${uId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// New Album
export const serviceSaveAlbums = async (uId: number, token: string, album: string) => {
  const newAlbum = {
    idUsuario: uId,
    nombre: album,
  };

  return await axios.post(`${API_SERVER}/album`, newAlbum, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Update Album

export const serviceUpdateAlbum = async (
  albumId: number,
  token: string,
  album: string
) => {
  const updateAlbum = {
    nombre: album,
  };

  return await axios.put(`${API_SERVER}/album/${albumId}`, updateAlbum, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Delete Album
export const serviceDeleteAlbum = async (token: string, albumId: number) => {
  return await axios.delete(`${API_SERVER}/album/${albumId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// =============================================================================
// Photo
// =============================================================================
// Photo by album
export const servicePhotoByUid = async (uId: number, token: string) => {
  return await axios.get(`${API_SERVER}/reko/photo/${uId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// New photo
export const servicePhotoNew = async (photo: PhotoUpload, token: string, uId: number) => {
  const image = photo.image ? await getToBase64(photo.image) : '';
  const photoNew = {
    image: image,
    namePhoto: photo.name,
    description: photo.description,
    userId: uId,
  };
  return await axios.post(`${API_SERVER}/reko/detectlabels`, photoNew, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// =============================================================================
// Label
// =============================================================================
// Get Labels
export const serviceLabels = async (uId: number, token: string) => {
  return await axios.get(`${API_SERVER}/reko/label/${uId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// =============================================================================
// Translate
// =============================================================================

export const serviceTranslate = async (text: string, idioma: string, token: string) => {
  const body = {
    text,
    targetLanguage: idioma,
  };
  return await axios.post(`${API_SERVER}/translate`, body, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// =============================================================================
// Dectect Text
// =============================================================================

export const serviceDetectText = async (imageFile: File, token: string) => {
  const image = await getToBase64(imageFile);
  return await axios.post(
    `${API_SERVER}/reko/detectText`,
    { image },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

// =============================================================================
// ChatBot
// =============================================================================

export const serviceChatBot = async (message: string, token: string) => {
  try {
    const { data } = await axios.post(
      `${API_SERVER}/chat`,
      { message },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return (data.message as string).toString().trim();
  } catch ({ response }) {
    return 'Escriba de nuevo el mensaje';
  }
};
