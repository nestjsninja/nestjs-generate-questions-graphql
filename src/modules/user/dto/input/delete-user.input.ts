import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteUserInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    id: string;
}