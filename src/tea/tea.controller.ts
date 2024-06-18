import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { TeaService } from './tea.service';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Controller('tea')
export class TeaController implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly teaService: TeaService) {}

  onModuleInit() {
    console.log('Tea OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('tea OnApplicationBootstrap');
  }

  @Post()
  create(@Body() createTeaDto: CreateTeaDto) {
    return this.teaService.create(createTeaDto);
  }

  @Get()
  findAll() {
    return this.teaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto) {
    return this.teaService.update(+id, updateTeaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teaService.remove(+id);
  }
}
