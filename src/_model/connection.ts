import { ConnectionStatus } from "src/_enums/connectionStatus";

export interface Connection {
  userOneId?: string;
  userTwoId?: string;
  status?: ConnectionStatus;
  actionUserId?: string;
}
