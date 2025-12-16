import { defineStore } from "pinia";
import type { AlertMessage } from "@/models/AlertMessage";

export const useAlertsStore = defineStore('alertsStore', {
  state: () => ({
    alerts: [] as Array<AlertMessage>,
  }),
  actions: {
    createAlert(alert:AlertMessage):void {
      this.alerts.push(alert);
    },
    clearAlerts():void {
      this.alerts = [];
    }
  }
})
