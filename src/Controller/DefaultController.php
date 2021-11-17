<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;

class DefaultController extends AbstractController
{
    #[Route('/{animal}', name: 'app_homepage')]
    public function index(Request $request, string $animal = '🐑')
    {
        $form = $this->createFormBuilder()
            ->add('animal', TextType::class, [
                'constraints' => [new NotBlank()],
                'data' => '🦖',
            ])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $this->redirectToRoute('app_homepage', [
                'animal' => $form->get('animal')->getData(),
            ]);
        }

        $animals = ['🐑', '🐵', '🦛', '🐧', '🐘'];

        return $this->render('default/index.html.twig', [
            'chosenAnimal' => $animal,
            'animals' => $animals,
            'form' => $form->createView(),
        ]);
    }
}
