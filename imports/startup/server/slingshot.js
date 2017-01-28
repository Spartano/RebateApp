import Files from '../../api/files/files'


Slingshot.fileRestrictions( "uploadToAmazonS3", {
  allowedFileTypes: [ "image/png", "image/jpeg", "image/gif" ],
  maxSize: 5 * 1024 * 1024
});

Slingshot.createDirective( "uploadToAmazonS3", Slingshot.S3Storage, {
  bucket: "rebates-photos",
  acl: "public-read",
  authorize: function () {     
    return true
  },
  key: function ( file ) {
    return this.userId + "/" + Date.now() + "-" +file.name;
  }
});
