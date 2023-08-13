export interface IMessage {
  id: number;
  initials: string;
  name: string;
  messageContent: string;
  timeSend: string;
  avatarColor: string;
}

export interface IMessageItemProps {
  message: IMessage;
  isLast: boolean;
}
