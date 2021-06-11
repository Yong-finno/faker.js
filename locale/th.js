var Faker = require('../lib');
var faker = new Faker({ locale: 'th'});
faker.locales['th'] = require('../lib/locales/th');
module['exports'] = faker;
