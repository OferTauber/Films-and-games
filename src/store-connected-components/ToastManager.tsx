import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../misc/useStore";
import { Toast as UnconnectedToast } from "../ui-components";

const StoreConnected = () => {
  const { toast } = useStore();

  return toast ? <UnconnectedToast {...{ ...toast }} /> : null;
};

export const ToastManager = observer(StoreConnected);

export default ToastManager;
