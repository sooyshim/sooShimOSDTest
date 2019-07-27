// options to pass to OSD viewer

// Notes:
// id : the id of the element to which OSD will be rendered
// tileSources: information on image files
// zoomInButton...fullPageButton: customizing navigation buttons. Each value of keys should match the id of the element that will represent the action performed. (e.g. <a id="zoom-in"></a> for the value "zoom-in")

// Notice: the file path of "Url" in Image is pointing to the public folder.
// This prevents errors of image loading. When assets are stored in the src folder, OSD loses the access to them inside a react component.

export default {
  id: 'container',
  tileSources: {
    Image: {
      xmlns: 'http://schemas.microsoft.com/deepzoom/2009',
      Url: `${process.env.PUBLIC_URL}/dzi_files/`,
      Format: 'jpg',
      ServerFormat: 'Default',
      Overlap: '1',
      TileSize: '256',
      Size: {
        Height: '3136',
        Width: '4704',
      },
    },
  },
  zoomInButton: 'zoom-in',
  zoomOutButton: 'zoom-out',
  homeButton: 'reset',
  fullPageButton: 'full-page',
};
