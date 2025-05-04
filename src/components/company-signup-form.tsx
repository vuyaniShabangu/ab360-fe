'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
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
  companyName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  businessDescription: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  servicesOffered: z.string().min(8, {
    message: 'Must be at least 2 characters.',
  }),
  websiteUrl: z.string().min(8, {
    message: 'Must be at least 2 characters.',
  }),
  companySize: z.string().min(8, {
    message: 'Please select one',
  }),
});

export function CompanySignupForm({
                             className,
                             ...props
                           }: React.ComponentProps<'form'>) {
  const router = useRouter();
  //const [loading, ] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      businessDescription: '',
      servicesOffered: '',
      websiteUrl: '',
      companySize: ''
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
          <h1 className="text-2xl font-bold text-text-black">Sign up your company</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your company details below.
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel className="text-text-black">Company name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessDescription"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel className="text-text-black">Business description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your business description here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="servicesOffered"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel className="text-text-black">Services offered</FormLabel>
                <FormControl>
                  <Input placeholder="List your services here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="websiteUrl"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel className="text-text-black">Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your website URL here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companySize"
            render={({  }) => (
              <FormItem className="grid gap-3">
                <FormLabel className="text-text-black">Company size</FormLabel>
                <FormControl>
                <Select>
                    
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="1-10employees">1-10 employees</SelectItem>
                        <SelectItem value="11-50employees">11-50 employees</SelectItem>
                        <SelectItem value="51+employees">51+ employees</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                    </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Continue
          </Button>
         
          
        </div>
      </form>
    </Form>
  );
}
