import { Controller, Get, Post, Body} from '@nestjs/common';
import { Movie } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './movies.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly prismaService: PrismaService){}
    
    @Get()
    findAll(): Promise<MovieDto[]>{
        return this.prismaService.movie.findMany()
    }
    
    @Post()
    create(@Body() {director, movieName, yearRealeased}: MovieDto): Promise<MovieDto>{
        return this.prismaService.movie.create({
            data: {director,movieName,yearRealeased}
        })
    }
}
