fb.models.Person = Backbone.Model.extend({

   /*validateItem: function (key) {
        return (this.validators[key]) ? this.validators[key](this.get(key)) : {isValid: true};
    },

    // TODO: Implement Backbone's standard validate() method instead.
    validateAll: function () {

        var messages = {};

        for (var key in this.validators) {
            if(this.validators.hasOwnProperty(key)) {
                var check = this.validators[key](this.get(key));
                if (check.isValid === false) {
                    messages[key] = check.message;
                }
            }
        }

        return _.size(messages) > 0 ? {isValid: false, messages: messages} : {isValid: true};
    },
*/


    defaults: {
        "id":  "",
        "name":     "",
        "first_name":    "",
        "last_name":    "",
        "gender":    "",
        "username":    "",
        "link":    "",
        "locale":    "",
        "timezone":    "",
        "_id": null,
        "CEGEP": "",
        "session": "3",
        "nomDuCours": "Philosophie 3",
        "jour": "3",
        "heure": "8h10 à 10h10",
        "groupe": "1100",
        "prof": "xyz"
    }
});

fb.models.PersonCollection = Backbone.Collection.extend({

    model: fb.models.Person
    
});