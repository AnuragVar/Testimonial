"use client";

import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pen, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import StarRating from "../../../components/starRating.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../helpers/firebase";
// import { useCompletion } from "ai/react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import Link from "next/link";
import { useParams } from "next/navigation";
import { messageSchema } from "@/schema/messageSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const specialChar = "||";

const parseStringMessages = (messageString: string): string[] => {
  return messageString.split(specialChar);
};

const initialMessageString = [
  "This product exceeded my expectations!",
  "The quality is top-notch and worth every penny.",
  "I highly recommend this to anyone looking for something reliable.",
];

export default function SendMessage() {
  const params = useParams<{ username: string }>();
  const username = params.username;
  const [userRating, setUserRating] = useState(0);
  //to take user rating
  console.log(userRating);

  const [suggestions, setSuggestions] = useState(initialMessageString);
  const [error, setError] = useState("");
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState(false);
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const fileref = useRef(null);
  // const messageContent = form.watch("content");

  const handleMessageClick = (message: string) => {
    console.log(message);

    setFormData({ ...formData, description: message });
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post<ApiResponse>("/api/send-message", {
        ...data,
        username,
      });

      toast({
        title: response.data.message,
        variant: "default",
      });
      form.reset({ ...form.getValues(), content: "" });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        description:
          axiosError.response?.data.message ?? "Failed to sent message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSuggestedMessages = async () => {
    try {
      setIsLoadingSuggestion(true);
      setError("");
      const response = await axios.post("/api/suggest-messages");
      setSuggestions(response.data.data);

      // Handle the received data (e.g., update state, display on UI)
    } catch (error) {
      setError("Error fetching messages");
      console.error("Error fetching messages:", error);
      // Handle error appropriately (e.g., show error message to user)
    } finally {
      setIsLoadingSuggestion(false);
    }
  };
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    //tell which  storage we are talking about
    //take reference of storage/root reference

    const fileName = new Date().getTime() + file;
    //name the file

    const storageRef = ref(storage, fileName);
    //take reference of file
    const uploadTask = uploadBytesResumable(storageRef, file);
    //uploadBytesResumable gives us the percentage upload too

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  function handleChange(e: any) {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }));
  }

  return (
    <div className="container mx-auto flex flex-col items-center my-8 p-6 bg-white rounded max-w-4xl ">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center opacity-85 leading-normal">
        Share Your Experience Anonymously
      </h1>

      <h2 className="text-center md:text-xl text-md opacity-75 leading-relaxed">
        Welcome to @{username}! We value your feedback. Please take a moment to
        share your thoughts by answering the questions below anonymously.
      </h2>
      <div className="mt-10 md:mt-16 text-left mx-auto container">
        <h1 className="font-bold text-xl pb-2">SAMPLE QUESTIONS</h1>
        <ul className="opacity-70 list-disc">
          <li>What motivated you to use @{username}?</li>
          <li>How has your experience been so far?</li>
          <li>What features do you find most useful?</li>
          <li>Would you recommend Speak Secrets to others? Why or why not?</li>
          <li>Is there anything you would like to see improved?</li>
        </ul>
      </div>
      <div className="flex pt-10 gap-5">
        <Button className="bg-violet-800">
          <Video />
          <span className="px-2"> Record a Video</span>
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Pen />
              <span className="px-2 flex">Send in Text</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="md:max-w-[600px] w-50px h-full scroll-auto overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Write Testimonial to @{username}</DialogTitle>
              <DialogDescription>
                <div className="my-5 mx-4">
                  <h1 className="font-bold text-sm opacity-100 my-1">
                    SAMPLE QUESTIONS
                  </h1>
                  <ul className="opacity-70 list-disc text-xs text-left">
                    <li>What motivated you to use @{username}?</li>
                    <li>How has your experience been so far?</li>
                    <li>What features do you find most useful?</li>
                    <li>
                      Would you recommend Speak Secrets to others? Why or why
                      not?
                    </li>
                    <li>Is there anything you would like to see improved?</li>
                  </ul>
                </div>
                <div className="grid gap-4">
                  <div className="flex flex-col gap-4">
                    <StarRating
                      size={30}
                      color="gold"
                      setRating={setUserRating}
                    />
                    <Textarea
                      placeholder={
                        userRating <= 3
                          ? "Please let us know how we can improve."
                          : "Share your thoughts..."
                      }
                      id="description"
                      value={formData.description}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Pedro Duarte"
                      className="col-span-3"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Name" className="text-right">
                      Your Email
                    </Label>
                    <Input
                      id="Name"
                      placeholder="petro@yahoo.com"
                      className="col-span-3"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div>
                    <div className="flex flex-col my-4 items-center gap-4">
                      <Label htmlFor="Name" className="text-right">
                        Upload Your Photo
                      </Label>
                      <input
                        onClick={(e) => setFile(e.target.files[0])}
                        //[0] to accept only first selected file
                        type="file"
                        ref={fileref}
                        hidden
                      />
                      <img
                        className="self-center rounded-full w-20 h-20 cursor-pointer"
                        src={
                          formData.avatar ||
                          "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706227200&semt=sph"
                        }
                        alt="profie pic"
                        onClick={() => {
                          if (fileref.current) {
                            fileref.current.click();
                          }
                        }}
                      />
                      {fileUploadError ? (
                        <p className="text-red-700 self-center">
                          File is not uploading
                        </p>
                      ) : filePerc > 0 && filePerc < 100 ? (
                        <p className="text-green-700 self-center">
                          Uploading {filePerc}%
                        </p>
                      ) : filePerc !== 0 ? (
                        <p className="text-green-700 self-center">
                          Successfully Uploaded
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <Button type="submit">Send</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 my-8">
              <div className="space-y-2">
                <Button
                  onClick={fetchSuggestedMessages}
                  className="my-4"
                  disabled={isLoadingSuggestion}
                >
                  Suggest Messages
                </Button>
                <p>Click on any message below to select it.</p>
              </div>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Messages</h3>
                </CardHeader>
                <CardContent className="flex flex-col space-y-4">
                  {error ? (
                    <p className="text-red-500">{error}</p>
                  ) : (
                    suggestions.map((message, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="mb-2"
                        onClick={(e) => handleMessageClick(e.target.innerHTML)}
                      >
                        {message}
                      </Button>
                    ))
                  )}
                </CardContent>
              </Card>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Separator className="my-6" />
      <div className="text-center">
        <div className="mb-4">Get Your Message Board</div>
        <Link href={"/sign-up"}>
          <Button>Create Your Own Account</Button>
        </Link>
      </div>
    </div>
  );
}
