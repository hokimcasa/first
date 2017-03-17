import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMemberDataService implements InMemoryDbService{
  createDb(){
    let members = [
      { id: 11, name: 'Mr. Nice',installdate:new Date('2010-10-21'),status:"未驗證"},
      { id: 12, name: 'Mr. Nice',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 13, name: 'Bombasto',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 14, name: 'Celeritas',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 15, name: 'Magneta',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 16, name: 'RubberMan',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 17, name: 'Dynama',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 18, name: 'Dr IQ',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 19, name: 'Magma',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 20, name: 'Tornado',installdate:new Date('2010-10-29'),status:"停權"},
      { id: 21, name: 'Mr. Nice',installdate:new Date('2010-10-21'),status:"未驗證"},
      { id: 22, name: 'Mr. Nice',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 23, name: 'Bombasto',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 24, name: 'Celeritas',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 25, name: 'Magneta',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 26, name: 'RubberMan',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 27, name: 'Dynama',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 28, name: 'Dr IQ',installdate:new Date('2010-10-29'),status:"已驗證"},
      {id: 29, name: 'Magma',installdate:new Date('2010-10-29'),status:"未驗證"},
      {id: 30, name: 'Tornado',installdate:new Date('2010-10-29'),status:"停權"}
    ];
    return {members};
  }
} 