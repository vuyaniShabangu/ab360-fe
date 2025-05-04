'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().optional(),
});

export function CompanyInviteForm({
                             className,
                             ...props
                           }: React.ComponentProps<'form'>) {
  const router = useRouter();
  //const [loading, ] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //TODO: Make API call

    // eslint-disable-next-line no-use-before-define, @typescript-eslint/no-explicit-any
    const response: any = {};
    console.log(values)

    console.log({ response });

    if (response.error) {
      toast.error(response.error.message, {
        description: response.error.message,
      });
    } else if (response.data) {
      toast.success('Account created successfully', {
        description: 'Please check your email to verify your account',
      });
      router.push('/');
    }
  };


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-6', className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-text-black">Invite your colleagues</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Invite colleagues to organisation
          </p>
        </div>
        <div className="grid gap-6">
            <div className="flex items-end gap-1 w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem className="grid gap-3 w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter your email here" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" className="">
                Finish
            </Button>
            </div>
            <Button type="submit" className="w-full">
                Finish
            </Button>
        </div>
      </form>
    </Form>
  );
}
