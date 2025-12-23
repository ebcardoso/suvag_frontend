import type { AlertMessage } from '@/models/AlertMessage';
import type { FormGroup } from '@/models/FormGroup';
import { useAlertsStore } from '@/stores/alertsStore';

interface IViewmodel {
  getRouteIndex():string,
  getCreateRoute():string,
  getTitleIndex():string,
  getTitleCreate():string,
  getTitleEdit():string,
  getTitleShow():string,
  getModalTitle():string,
  getModalButtonText():string,
  canShowFooterOptionsOnShow():boolean,
  fieldGroups():Array<FormGroup>
}

export default class BaseViewmodel implements IViewmodel {
  //Default Index Route
  getRouteIndex():string {
    return 'root';
  }
  getRouteIndexParams() {
    return {};
  }
  getCreateRoute():string {
    return 'root';
  }

  //Default Title Pages
  getTitleIndex():string {
    return 'Index';
  }
  getTitleCreate():string {
    return 'Cadastrar';
  }
  getTitleEdit():string {
    return 'Editar';
  }
  getTitleShow():string {
    return 'Exibir Dados';
  }

  //Modal
  getModalTitle(): string {
    return 'Modal Title';
  }
  getModalButtonText(): string {
    return 'Botão';
  }

  //Control exhibition of page items
  canShowFooterOptionsOnShow():boolean {
    return true;
  }

  //Form Groups
  fieldGroups():Array<FormGroup> {
    return [];
  }

  //Create Alerts
  createAlert(type:string, title:string, message:string) {
    const newAlert:AlertMessage = {
      type: type,
      title: title,
      message: message
    }
    const alertsStore = useAlertsStore();
    alertsStore.createAlert(newAlert);
  }
}
