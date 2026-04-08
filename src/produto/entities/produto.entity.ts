/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';


@Entity({ name: 'tb_produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({length: 50, nullable: false})
  nome!: string;

  @IsNotEmpty()
  @Column({length: 30, nullable: false})
  marca!: string;

  @IsNotEmpty()
  @Column({length: 100, nullable: false})
  descricao!: string;

  @IsNotEmpty()
  @Column({type: 'decimal', precision: 7, scale: 2, nullable:false, }) //2 casas depois da virgula e um total de 7 digitos
  preco!: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
  })
  categoria!: Categoria;

}
