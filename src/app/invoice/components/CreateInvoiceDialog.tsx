import { Button } from '@/components/ui/button';
import { Controller, useForm } from 'react-hook-form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createInvoice } from '@/lib/actions';
import ErrorMessage from '@/components/common/ErrorMessage';
import ButtonLoading from '@/components/ui/loadingButton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export type CreateInvoiceData = {
  name: string;
  amount: number;
};

export function CreateInvoiceDialog({ isOpen, onClose }: Props) {
  const { handleSubmit, control, formState } = useForm<CreateInvoiceData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: CreateInvoiceData) => {
    await createInvoice(data);
  };

  const onOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <DialogContent className='sm:max-w-[425px]'>
        {/* Move form inside DialogContent */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create invoice</DialogTitle>
            <DialogDescription>
              Create a new invoice to start tracking your expenses and income.
              Fill in the details below to generate your invoice.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4'>
            <div className='grid gap-3'>
              <Label htmlFor='name'>Name</Label>
              <Controller
                name='name'
                control={control}
                defaultValue='Pedro Duarte'
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    data-testid='name-input'
                    id='name'
                    {...field}
                  />
                )}
              />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='amount'>Amount</Label>
              {/* Changed name from 'name' to 'amount' */}
              <Controller
                name='amount'
                control={control}
                defaultValue={250}
                rules={{ required: true }}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <Input
                        data-testid='amount-input'
                        id='amount'
                        type='number'
                        step={0.01}
                        min={0}
                        {...field}
                      />
                      <ErrorMessage>
                        {fieldState.error?.message || ''}
                      </ErrorMessage>
                    </>
                  );
                }}
              />
            </div>
          </div>
          <DialogFooter className='mt-4'>
            <DialogClose asChild>
              <Button
                variant='outline'
                onClick={onClose}
              >
                Cancel
              </Button>
            </DialogClose>
            <ButtonLoading
              type='submit'
              isLoading={formState.isSubmitting}
            >
              Create invoice
            </ButtonLoading>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
