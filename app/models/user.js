import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') address;
  @attr('string') addressNumber;
  @attr('string') birthday;
  @attr('string') email;
  @attr('boolean') gender;
  @attr('string') name;
  @attr('string') phone;
  @attr('string') surname;
  @attr('string') username;
  @attr('string') zip;
  @attr('string') city;
}
