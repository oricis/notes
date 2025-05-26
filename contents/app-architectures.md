# App architectures

## Framework architecture

The *frameworks* enforce the "tech-driven architecture", where you don't known
what is the modelling domain, f.e.:

    ProjectFolder/
      |-- app/
            |-- Controllers/
            |-- Models/
            |-- DTOs
            |...


## Use cases architecture

The *architecture based on **use cases*** groups the application classes by
features is a *feature-driven architecture*
knows as ***screaming architecture***:

    UsersNotificationService
      |-- AppNotifications
      |-- MailingNotifications
      |-- SocialMediaNotifications

### Proposal of *screaming architecture* on Laravel

    ProjectFolder/
      |-- app/
      |     |-- Actions/
      |     |     |-- Fortify/..
      |     |     |-- Jetstream/..
      |     |-- Exceptions/..
      |     |-- Helpers/
      |     |     |-- Core/..
      |     |     |-- Common/..
      |     |-- Http/
      |     |     |-- Controllers/
      |     |           |-- ApiController.php
      |     |           |-- Controller.php
      |     |           |-- WebController.php
      |     |-- Mail/
      |     |     |-- MailBuilder.php
      |     |-- Misc/
      |     |     |-- Data/..
      |     |     |-- POPOs/..
      |     |     |-- Traits/..
      |     |     |-- ..
      |     |-- Models/
      |     |     |-- Traits/..
      |     |     |-- AppModel.php
      |     |-- Providers/..
      |     |-- Services/
      |     |     |-- AppService.php
      |     |-- View/..
      |
      |-- features/
      |     |-- App/..
      |     |-- Game/..
      |     |-- User/
      |           |-- Actions/..
      |           |-- Helpers/..
      |           |-- Http/
      |           |     |-- Controllers/
      |           |     |     |-- Api/..
      |           |     |     |-- Web/..
      |           |     |-- Requests/
      |           |     |     |-- Api/..
      |           |     |     |-- Traits/..
      |           |     |     |-- Web/..
      |           |     |-- Resources/..
      |           |-- Models/..
      |           |-- Services/
      |                 |-- Auth/..
      |                 |-- ..
      |
      |-- docs/
      |     |-- mvp/
      |     |     |-- ..
      |     |     |-- index.md
      |     |-- index.md
      |-- ..

***NOTE:** each directory in "features" contains a feature group and reproduces*
*the directory structure that can be placed inside "app".*
*The content inside "app" is reduced to the minimum expression, only*
*the classes on an initial "clean app" (removing users that have their place*
*inside "features". The "NN models", f.e. "GameUser.php" will be inside*
*the first entity name in the model name, in this case, the model is hosted*
*inside "features/Game/Models/".*
*The app directory also contains the installed packages. They aren't moved*
*to avoid update problems.*

*In the screaming architecture, using "user histories" as a starting point*
*can be useful. Maintaining the framework structure inside each "feature"*
*directory allows easy onboarding to the project of new "framework" developers.*


***

### References

 - https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html
 - https://medium.com/@mubashirhussain29/the-screaming-architecture-story-08750691291f


***

[Go to index](../README.md)
