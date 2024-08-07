import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

export default function InputForm({ onSubmit }: any) {
  const [teleID, setTeleID] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit({ teleID, amount });
    setTeleID("");
    setAmount("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between flex-col mb-3 min-w-80"
    >
      <div className="mb-4 flex-1">
        <TextField
          label="Telegram ID"
          variant="outlined"
          fullWidth
          value={teleID}
          onChange={(event) => setTeleID(event.target.value)}
          error={/^(\d+(\.\d+)?|)$/.test(teleID) ? false : true}
          helperText={/^(\d+(\.\d+)?|)$/.test(teleID) ? "" : "Please enter a valid number"}
          required
        />
      </div>
      <div className="mb-4 flex-1">
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          error={/^(\d+(\.\d+)?|)$/.test(amount) ? false : true}
          helperText={/^(\d+(\.\d+)?|)$/.test(amount) ? "" : "Please enter a valid number"}
          required
        />
      </div>
      <div className="mx-auto">
        <Button type="submit" variant="contained" color="primary">
          Run
        </Button>
      </div>
    </form>
  );
}
