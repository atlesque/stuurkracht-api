import { Model } from "objection";
import { v4 as uuid } from "uuid";

export class BaseUuidModel extends Model {
  id: string;

  dateCreated?: string;
  dateModified?: string;

  $beforeInsert() {
    this.id = uuid();
    this.dateCreated = new Date().toISOString();
  }

  $beforeUpdate() {
    this.dateModified = new Date().toISOString();
  }
}
