export default class MenuViewmodel {
  menus(path:any) {
    return [
      {
        name: 'Usuários',
        route: '#',
        active: this.isUserModule(path), 
        submenus: this.usersSubmenus(path)
      },
    ];
  }

  //Users
  isUserModule(path:any):boolean {
    const paths = ['usersIndexPath', 'usersCreatePath'];
    return paths.includes(path) ? true : false;
  }
  usersSubmenus(path:any) {
    return [
      {
        name: 'Listar Usuários',
        route: 'root', //'usersIndexPath',
        active: (path=='usersIndexPath')
      },
      {
        name: 'Criar Usuário',
        route: 'root', //'usersCreatePath',
        active: (path=='usersCreatePath')
      },
    ];
  }
}
