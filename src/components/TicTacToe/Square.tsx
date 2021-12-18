import React from "react"
import { Button, ButtonProps } from "@mui/material"

const Square: React.FC<ButtonProps> = ({
  onClick,
  value,
  ...props
}: ButtonProps) => (
  <Button variant="outlined" onClick={onClick} {...props}>
    {value}
  </Button>
)

export default Square
