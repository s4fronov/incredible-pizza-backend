import { Prop } from "@nestjs/mongoose";

export class AddressEntity {
  @Prop({
      required: true,
      type: String,
  })
  street: string;

  @Prop({
      required: true,
      type: String,
  })
  house: string;

  @Prop({ 
      required: false,
      type: String, 
  })
  porch?: string;

  @Prop({ 
      required: false,
      type: String,
  })
  floor?: string;

  @Prop({ 
      required: false,
      type: String, 
  })
  apartment?: string;

  @Prop({ 
      required: false,
      type: String, 
  })
  porchCode?: string;
};
