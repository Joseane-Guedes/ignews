import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { Async } from ".";

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello World')).toBeInTheDocument();
    //Tanto o findByText e o waitFor aguardam alguma coisa acontecer ou ser adicionada em tela.
  // findByText will wait until something like this renders;
  // expect(await screen.findByText('Button')).toBeInTheDocument();

  // check method waitFor()
  // await waitFor(() => {
  //   return expect(screen.queryByText('Hello World')).toBeInTheDocument();
  // });

  await waitForElementToBeRemoved(screen.queryByText('Button'));

})
