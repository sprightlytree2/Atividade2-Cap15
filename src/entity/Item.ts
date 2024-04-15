import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({"nullable": true})
    title: string;

    @Column({"nullable": true})
    tag: string;

    @Column({"nullable": true})
    description: string;

    @Column({"nullable": true})
    price: string;

    @Column({"name": "img", "nullable": true})
    img: string;
}