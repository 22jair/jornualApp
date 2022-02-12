export const fileUpload = async ( file ) => {
  const { REACT_APP_CLOUDINARY_NAME, REACT_APP_CLOUDINARY_UPLOAD_PRESET } = process.env;
  const cloudUrl = `https://api.cloudinary.com/v1_1/${REACT_APP_CLOUDINARY_NAME || ''}/upload`;
  const formData = new FormData();
  formData.append('upload_preset', REACT_APP_CLOUDINARY_UPLOAD_PRESET || '');
  formData.append('file', file);
  try{
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })

    if ( resp.ok ){
      const respData = await resp.json();
      return respData.secure_url;
    }else{
      throw await resp.json();
    }
  }catch(error){
    throw error;
  }
}