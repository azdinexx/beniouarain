'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import { ProductVariant } from '@/lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import {
  // @ts-ignore
  experimental_useFormState as useFormState,
  experimental_useFormStatus as useFormStatus,
} from 'react-dom';
import cn from '@/lib/merge';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  className,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  className?: string;
}) {
  const { pending } = useFormStatus();

  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={cn(disabledClasses, className)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label='Please select an option'
        aria-disabled
        className={cn(disabledClasses, className)}
      >
        <div className='absolute left-0 ml-4'>
          <PlusIcon className='h-5' />
        </div>
        Add To Cart
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label='Add to cart'
      aria-disabled={pending}
      className={clsx(className, {
        'hover:opacity-90': true,
        disabledClasses: pending,
      })}
    >
      <div className='absolute left-0 ml-4'>
        {pending ? (
          <LoadingDots className='mb-3 bg-white' />
        ) : (
          <PlusIcon className='h-5' />
        )}
      </div>
      Add To Cart
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  className,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  className?: string;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        className={className}
      />
      <p aria-live='polite' className='sr-only' role='status'>
        {message}
      </p>
    </form>
  );
}
