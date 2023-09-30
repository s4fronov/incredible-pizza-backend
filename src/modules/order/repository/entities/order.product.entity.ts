import { Prop } from "@nestjs/mongoose";

export class OrderProductEntity {
  @Prop({
    required: true,
    type: Number,
  })
  id: number;

  @Prop({
    required: true,
    type: String,
  })
  title: string;

  @Prop({
    required: true,
    type: String,
  })
  description: string;

  @Prop({
    required: true,
    type: Number,
  })
  price: number;

  @Prop({
    required: false,
    type: String,
  })
  img: string;

  @Prop({
    required: false,
    type: String,
  })
  labelText?: string;

  @Prop({
    required: false,
    type: String,
  })
  pizzaSettings?: string
}