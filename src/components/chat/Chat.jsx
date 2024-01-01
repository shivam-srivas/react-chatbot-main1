"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";
import { ChatContext } from "@/provider";
import BotCardContent from "./BotCardContent";
import BotMessageWithOptions from "./BotMessageWithOptions";
import UserMessage from "./UserMessage";
import BotMessageWithReference from "./BotMessageWithReference";
import LoadingDots from "./LoadingDots";

export default function Chat() {
  const { messages, sendMessage, isTyping, isFinishedConversation } =
    useContext(ChatContext);
  const [chatInput, setChatInput] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleToggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleCloseChatbox = () => {
    setIsChatboxOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMessage(chatInput);
    setChatInput("");
  };

  const renderBotMessage = (message) => {
    if (message.options) {
      return (
        <BotMessageWithOptions
          key={message.id}
          message={message.content}
          options={message.options}
        />
      );
    }
    if (message.reference) {
      return (
        <BotMessageWithReference
          key={message.id}
          message={message.content}
          reference={message.reference}
        />
      );
    }

    return <BotCardContent key={message.id}>{message.content}</BotCardContent>;
  };

  return (
    <section
      className={`self-center mt-4 sm:mt-2 ${
        isChatboxOpen ? "fixed bottom-0 right-0" : ""
      }`}
    >
      {isChatboxOpen ? (
        <Card className="w-[340px] h-auto">

          <CardHeader className="bg-gradient-to-r from-blue-700 to-purple-900 ">
            <div className="flex flex justify-between">
            <CardTitle className="text-white">Sci-Bot 🚀</CardTitle>
            <div className="flex">
            <button className="text-white" onClick={handleCloseChatbox}>
                  <svg
                    fill="#FFFFFF"
                    width="20px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m20.48 3.512c-2.172-2.171-5.172-3.514-8.486-3.514-6.628 0-12.001 5.373-12.001 12.001 0 3.314 1.344 6.315 3.516 8.487 2.172 2.171 5.172 3.514 8.486 3.514 6.628 0 12.001-5.373 12.001-12.001 0-3.314-1.344-6.315-3.516-8.487zm-1.542 15.427c-1.777 1.777-4.232 2.876-6.943 2.876-5.423 0-9.819-4.396-9.819-9.819 0-2.711 1.099-5.166 2.876-6.943 1.777-1.777 4.231-2.876 6.942-2.876 5.422 0 9.818 4.396 9.818 9.818 0 2.711-1.099 5.166-2.876 6.942z" />
                    <path d="m13.537 12 3.855-3.855c.178-.194.287-.453.287-.737 0-.603-.489-1.091-1.091-1.091-.285 0-.544.109-.738.287l.001-.001-3.855 3.855-3.855-3.855c-.193-.178-.453-.287-.737-.287-.603 0-1.091.489-1.091 1.091 0 .285.109.544.287.738l-.001-.001 3.855 3.855-3.855 3.855c-.218.2-.354.486-.354.804 0 .603.489 1.091 1.091 1.091.318 0 .604-.136.804-.353l.001-.001 3.855-3.855 3.855 3.855c.2.218.486.354.804.354.603 0 1.091-.489 1.091-1.091 0-.318-.136-.604-.353-.804l-.001-.001z" />
                  </svg>
                </button>
            </div>
           
            </div>
            <CardDescription className="text-white ">
             For the love of science, let's chat!

              
                
            </CardDescription>
            
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[450px] w-full pr-4 mt-2 ">
              {messages.map((message, index) =>
                message.role === "assistant" ? (
                  <div
                    ref={index === messages.length - 1 ? lastMessageRef : null}
                    key={message.id}
                  >
                    {renderBotMessage(message)}
                  </div>
                ) : (
                  <UserMessage key={message.id} message={message} />
                )
              )}
              {isTyping && <LoadingDots />}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="w-full flex gap-2">
              <Input
                placeholder="How can I help you?"
                value={chatInput}
                disabled={isFinishedConversation}
                onChange={(e) => setChatInput(e.target.value)}
              />
              <Button disabled={isFinishedConversation} type="submit">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <button
          className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full cursor-pointer"
          onClick={handleToggleChatbox}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <circle cx="16" cy="16" r="16" fill="#1C98F7" />

              <path
                fill="#FFF"
                d="M16.28 23.325a11.45 11.45 0 002.084-.34 5.696 5.696 0 002.602.17.627.627 0 01.104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 01.311-.531c.258-.146.498-.314.717-.499.864-.732 1.352-1.708 1.352-2.742 0-.347-.055-.684-.159-1.006.261-.487.472-.999.627-1.53A4.59 4.59 0 0126 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 01-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 00-1.2-.81 2.986 2.986 0 00-.368-.187c-.34.051-.688.077-1.039.077-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12 5.2 0 9.458 3.607 9.458 8.12 0 4.514-4.259 8.121-9.458 8.121-.584 0-1.162-.045-1.728-.135-.245.058-1.224.64-2.635 1.67-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 01-1.044-.765zm4.949.666c.043 0 .087.003.13.01.51.086 1.034.13 1.564.13 4.392 0 7.907-2.978 7.907-6.589 0-3.61-3.515-6.588-7.907-6.588-4.39 0-7.907 2.978-7.907 6.588 0 1.746.821 3.39 2.273 4.62.365.308.766.588 1.196.832.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104zm-2.337-4.916c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226z"
              />
            </g>
          </svg>
        </button>
      )}
    </section>
  );
}
