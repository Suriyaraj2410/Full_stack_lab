function containsPhone(number) {
    let data = number;
    const re = /(\+[0-9]+[ ]?)?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}/g;
    if (re.test(data)) {
      if (data.replace(/[ -()]/g, "").length > 10) {
        data=data.replace(/[ -()a-zA-Z]/g, "");
        document.getElementById("result").innerText = data;
      } else {
        let validNum = data.replace(/[ -()a-zA-Z]/g, "");
        document.getElementById("result").innerText = "Valid Phone";
        document.getElementById("numberOutput").innerText =
          "Your number:" + validNum;
      }
    } else {
      
      document.getElementById("result").innerText = "Invalid";
    }
  }