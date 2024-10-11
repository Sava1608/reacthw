import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "../../interfaces/IUsersProps/IUsers";
import {getPosts} from "../../services/api.service";
import {IPosts} from "../../interfaces/IPostsProps/IPosts";
import PostsComponent from "../PostsComponent/PostsComponent";

interface IProps {
    user: IUsers
}

const UserComponent: FC<IProps> = ({user}) => {
    const [postId, setPostId] = useState<number>(0);
    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        if (postId !== 0) {
            getPosts(postId).then((value) => {
                setPosts(value);
            });
        }
    }, [postId]);

    const handleClick = (id: number) => {
        setPostId(id);
    };

    console.log(posts); // Лог для перевірки, чи приходять пости

    const {
        id, firstName, lastName, maidenName, age, gender, email, phone, username, password, birthDate,
        image, bloodGroup, height, weight, eyeColor, hair, ip, address, macAddress, university, bank,
        company, ein, ssn, userAgent, crypto, role
    } = user;

    return (
        <div>
            <div className={'name-user'}>
                <img src={image} alt={'#'} /> {id}. Name: {firstName} {lastName} {maidenName} BirthDate: {birthDate}
            </div>
            <div className={'data-user'}>Age: {age} Gender: {gender} Eye: {eyeColor} Hair: {hair.color}{hair.type} Email@: {email} Phone: {phone} University {university}</div>
            <div className={'login-password'}>UserName: {username} Password: {password}</div>
            <div className={'health'}>BloodGroup: {bloodGroup} Height: {height} Weight: {weight}</div>
            <div>
                <ul className={'location'}>
                    <p>Address and Location</p>
                    <li>IP: {ip}</li>
                    <li>{address.address}</li>
                    <li>{address.city}</li>
                    <li>{address.state}</li>
                    <li>{address.stateCode}</li>
                    <li>{address.postalCode}</li>
                    <ul>
                        <p>Coordinates:</p>
                        <li>{address.coordinates.lat}</li>
                        <li>{address.coordinates.lng}</li>
                    </ul>
                    <li>{address.country}</li>
                    <li>{macAddress}</li>
                </ul>
            </div>
            <div>
                <ul className={'bank'}>
                    <p>User Bank</p>
                    <li>CardExpire: {bank.cardExpire}</li>
                    <li>CardNumber: {bank.cardNumber}</li>
                    <li>CardType: {bank.cardType}</li>
                    <li>Currency: {bank.currency}</li>
                    <li>IBAN: {bank.iban}</li>
                </ul>
            </div>
            <div>
                <ul className={'company'}>
                    <p>User Job</p>
                    <li>{company.department}</li>
                    <li>{company.name}</li>
                    <li>{company.title}</li>
                    <li>{company.address.address}</li>
                    <li>{company.address.city}</li>
                    <li>{company.address.state}</li>
                    <li>{company.address.stateCode}</li>
                    <li>{company.address.postalCode}</li>
                    <ul>
                        <p>Coordinates:</p>
                        <li>{company.address.coordinates.lng}</li>
                        <li>{company.address.coordinates.lat}</li>
                    </ul>
                    <li>{company.address.country}</li>
                </ul>
            </div>
            <div>Ein: {ein}</div>
            <div>Snn: {ssn}</div>
            <div>UserAgent: {userAgent}</div>
            <div>
                <ul className={'crypto'}>
                    <p>Crypto:</p>
                    <li>{crypto.coin}</li>
                    <li>{crypto.network}</li>
                    <li>{crypto.wallet}</li>
                </ul>
            </div>
            <div>Role: {role}</div>
            <button onClick={() => handleClick(user.id)}>Posts</button>
            {
                posts.map((post: IPosts, index) => (
                    <PostsComponent key={index} post={post} handleClick={handleClick} /> // Передаємо окремий пост
                ))
            }
        </div>
    );
};

export default UserComponent;