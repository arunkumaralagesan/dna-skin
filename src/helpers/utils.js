export const isMobileDevice = () => {
  return (typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1);
};

export const getYoutubeID = url => {
  var id = url?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  return id[1];
}

export const getYoutubeThumnailFromUrl = url => {
  var id = getYoutubeID(url);
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}