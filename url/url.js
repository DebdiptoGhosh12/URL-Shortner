function shortenUrl() {
          var originalUrl = document.getElementById("originalUrl").value;
          if (!originalUrl) {
              alert("Please enter a URL");
              return;
          }
      
         
          var shortenedUrl = "http://your-shortened-url.com/" + generateRandomString(6);
          
          document.getElementById("shortenedUrl").innerText = shortenedUrl;
      }
      
      function generateRandomString(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
      }
      