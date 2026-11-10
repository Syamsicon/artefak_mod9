import { Injectable, NotFoundException } from '@nestjs/common';
import filmsData from './films.json';
import { randomUUID } from 'crypto';
import { CreateFilmDto } from './DTO/create-film.dto';
import { UpdateFilmDto } from './DTO/update-film.dto';

@Injectable()
export class FilmsService {
  private films = [...filmsData];

  findAll(ditonton?: boolean) {
    if (ditonton === undefined) return this.films;
    return this.films.filter((f) => f.sudahDitonton === ditonton);
  }

  findOne(id: string) {
    const film = this.films.find((f) => f.id === id);
    if (!film) throw new NotFoundException(`Film dengan id ${id} tidak ditemukan`);
    return film;
  }

  create(dto: CreateFilmDto) {
    const filmBaru = {
        id: randomUUID(),
        judul: dto.judul,
        genre: dto.genre,
        tahun: dto.tahun,
        rating: dto.rating,
        sudahDitonton: dto.sudahDitonton ?? false,
    };
    this.films.push(filmBaru);
    return filmBaru;
  }

  update(id: string, dto: UpdateFilmDto) {
    const film = this.findOne(id); 
    Object.assign(film, dto);
    return film;
  }

  remove(id: string) {
    const film = this.findOne(id); 
    this.films = this.films.filter((f) => f.id !== film.id);
  }

}