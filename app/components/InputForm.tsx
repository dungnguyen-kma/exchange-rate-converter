import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

export default function InputForm({ onSubmit }: any) {
  const [teleID, setTeleID] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit({ teleID, amount });
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-between flex-wrap mb-3">
      <div className="mr-4 flex-1">
        <TextField
          label="Telegram ID"
          variant="outlined"
          onChange={(event) => setTeleID(event.target.value)}
        />
      </div>
      <div className="mr-4 flex-1">
        <TextField
          label="Amount"
          variant="outlined"
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Run
      </Button>
    </form>
  );
}
