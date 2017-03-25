function User() {
    this.id;
    this.name;
    this.email;
    this.password;
    this.role;

    this.construct = function(id, name, email, password,role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    //getters
    this.getId = function() {
        return this.id;
    }

    this.getName = function() {
        return this.name;
    }

    this.getEmail = function() {
        return this.email;
    }

    this.getPassword = function() {
        return this.password;
    }
    this.getRole = function() {
        return this.role;
    }
    //setters
    this.setId = function(id) {
        this.id = id;
    }

    this.setName = function(name) {
        this.name = name;
    }

    this.setEmail = function(email) {
        this.email = email;
    }

    this.setPassword = function(password) {
        this.password = password;
    }

    this.setRole = function(password) {
      this.role = role;
    }
    this.cookieToObj = function (user) {

        try {
            this.setId(user.id);
        } catch (err) {

        }

        try {
            this.setName(user.name);
        } catch (err) {

        }

        try {
            this.setEmail(user.email);
        } catch (err) {
            // TODO
        }

        try {
            this.setPassword(user.password);
        } catch (err) {
            // TODO
        }
    }
}
