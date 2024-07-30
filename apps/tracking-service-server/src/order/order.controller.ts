import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderService } from "./order.service";
import { UpdateOrderInputDto } from "./UpdateOrderInputDto";
import { UpdateOrderOutputDto } from "./UpdateOrderOutputDto";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderController {
  constructor(protected readonly service: OrderService) {}

  @common.Put("/update-order")
  @swagger.ApiOkResponse({
    type: UpdateOrderOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateOrder(
    @common.Body()
    body: UpdateOrderInputDto
  ): Promise<UpdateOrderOutputDto> {
        return this.service.UpdateOrder(body);
      }
}
