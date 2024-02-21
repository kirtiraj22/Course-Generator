import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {
	user: User;
};

const UserAvatar = ({ user }: Props) => {
	return (
		<Avatar>
			{user.image ? (
				<div className="relative w-9 h-9 aspect-square rounded-lg border-none">
					<Image
						src={user.image}
						width={100}
						height={100}
						style={{ objectFit: "cover", borderRadius: "50%" }}
						alt="user image"
						referrerPolicy="no-referrer"
					/>
				</div>
			) : (
				<AvatarFallback>
					<span className="sr-only">{user?.name}</span>
				</AvatarFallback>
			)}
		</Avatar>
	);
};

export default UserAvatar;
