import { contactToDb } from "@/actions/post/post.action";
import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

// export const useInquiry = () => {
//   return useMutation({
//     mutationKey: ["INQUIRY"],
//     mutationFn: async (data: any) => await inquiryToDb(data),
//     onSuccess: (data) => {
//       toast.success(` ${data?.data}! Inquiry added successfully`);
//     },
//     onError: (data) => {
//       toast.error(data?.message || "Inquiry added Failed");
//     },
//   });
// };

export const useContact = () => {
  return useMutation({
    mutationKey: ["CONTACT"],
    mutationFn: async (data: any) => await contactToDb(data),
    onSuccess: (data) => {
      toast.success(` ${data?.data?.detail} `);
    },
    onError: (data: any) => {
      toast.error(data?.details?.error || "Contact added Failed");
    },
  });
};
