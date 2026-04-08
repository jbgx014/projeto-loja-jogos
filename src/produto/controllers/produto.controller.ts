/* eslint-disable prettier/prettier */
import { Body, Put, Post, Controller, HttpCode, Get, HttpStatus, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { ProdutoService } from './../services/produto.service';
import { Produto } from '../entities/produto.entity';

@Controller("/produtos")
export class ProdutoController {
    constructor(private readonly ProdutoService: ProdutoService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.ProdutoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return this.ProdutoService.findById(id);
    }

    @Get('/marca/:marca')
    @HttpCode(HttpStatus.OK)
    findAllByMarca(@Param('marca') marca: string): Promise<Produto[]>{
        return this.ProdutoService.findAllByMarca(marca);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Produto): Promise<Produto> {
        return this.ProdutoService.update(produto);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.ProdutoService.delete(id);
    }

}