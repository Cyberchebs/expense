import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../content";

export default function TransactionForm({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);

  function handleFormChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>enter description</FormLabel>
              <input
                placeholder="enter transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>enter amount</FormLabel>
              <input
                placeholder="enter transaction amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt="5" value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                value="income"
                colorScheme="red"
                name="type"
                pr={3}
                onChange={handleFormChange}
              >
                income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
              >
                expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              cancel
            </Button>
            <Button type="submit" onClick={onClose}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
