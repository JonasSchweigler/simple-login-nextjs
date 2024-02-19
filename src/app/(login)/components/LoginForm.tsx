"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginFormValues, useLoginForm } from "@/forms/login.form";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

export const LoginForm = () => {
  const form = useLoginForm();

  const handleSubmit = (data: LoginFormValues) => {
    console.log(data);
    toast("You submitted the following values:", {
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className='flex flex-col space-y-16'>
      <div className='space-y-5 text-[#2f1460]'>
        <h1 className='text-5xl font-[500]'>Welcome back!</h1>
        <h3 className='font-[450] text-base'>Please Log in to your account.</h3>
      </div>
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Email'
                    type='email'
                    className='py-8 focus-visible:ring-transparent focus-visible:border-primary border-2 font-medium'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Password'
                    type='password'
                    className='py-8 focus-visible:ring-transparent focus-visible:border-primary border-2 font-medium'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-row items-center gap-2 justify-between'>
            <FormField
              control={form.control}
              name='remember'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex flex-row items-center gap-2'>
                      <Checkbox
                        onCheckedChange={(e) => field.onChange(e)}
                        id='check'
                      />
                      <Label htmlFor='check'>Remember me</Label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link href={"#"} className='text-destructive'>
              Forgot Password
            </Link>
          </div>
          <div className='flex flex-row gap-3 items-center flex-wrap'>
            <Button className='flex-1 border-2 shadow-md py-7 min-w-[200px] text-base'>
              Login
            </Button>
            <Button
              variant={"outline"}
              className='flex-1 border-2 border-primary py-7 min-w-[200px] text-base'
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
