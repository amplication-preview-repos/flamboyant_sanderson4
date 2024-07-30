import * as graphql from "@nestjs/graphql";
import { UpdateOrderInputDto } from "./UpdateOrderInputDto";
import { UpdateOrderOutputDto } from "./UpdateOrderOutputDto";
import { OrderService } from "./order.service";

export class OrderResolver {
  constructor(protected readonly service: OrderService) {}

  @graphql.Mutation(() => UpdateOrderOutputDto)
  async UpdateOrder(
    @graphql.Args()
    args: UpdateOrderInputDto
  ): Promise<UpdateOrderOutputDto> {
    return this.service.UpdateOrder(args);
  }
}
