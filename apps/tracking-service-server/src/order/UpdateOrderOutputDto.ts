import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("UpdateOrderOutputDtoObject")
class UpdateOrderOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    orderId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    currentLocation!: string;

    @Field(() => Date)
    @Type(() => Date)
    expectedDeliveryDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    updatedAt!: Date;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    otherdetails?: InputJsonValue;
}

export { UpdateOrderOutputDto as UpdateOrderOutputDto };