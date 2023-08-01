import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {Seeder} from "nestjs-seeder";
import {faker} from '@faker-js/faker/locale/tr';


@Injectable()
export class UserSeeder implements Seeder {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {
    }

    async seed() {
        const usersData = [];

        for (let i = 0; i < 10; i++) {
            const newUser = {
                first_name: faker.person.firstName(),
                last_name: faker.person.firstName(),
                city: faker.location.city(),
                phone: faker.phone.number(),
                is_active: Math.random() < 0.5,
            };
            usersData.push(newUser);
        }

        for (const userData of usersData) {
            const newUser = this.usersRepository.create(userData);
            await this.usersRepository.save(newUser);
        }
    }

    drop(): Promise<any> {
        return Promise.resolve(undefined);
    }
}
