import { Injectable } from "@nestjs/common";
import { UpdateOrderInputDto } from "./UpdateOrderInputDto";
import { UpdateOrderOutputDto } from "./UpdateOrderOutputDto";

@Injectable()
export class OrderService {
  constructor() {}
  async UpdateOrder(args: UpdateOrderInputDto): Promise<UpdateOrderOutputDto> {
    throw new Error("Not implemented");
  }
}
