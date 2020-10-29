import { Model } from "objection";

export class BaseModel extends Model {
  readonly id: number;

  dateCreated?: string;
  dateModified?: string;

  $beforeInsert() {
    this.dateCreated = new Date().toISOString();
  }

  $beforeUpdate() {
    this.dateModified = new Date().toISOString();
  }
}
